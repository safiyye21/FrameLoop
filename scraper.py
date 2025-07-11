#!/usr/bin/env python3
"""
MapCamera Product Scraper
Scrapes product data from MapCamera and saves to JSON for FrameLoop marketplace
"""

import requests
from bs4 import BeautifulSoup
import json
import time
import random
from urllib.parse import urljoin, urlparse
import os

class MapCameraScraper:
    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })
        self.base_url = "https://www.mapcamera.com"
        self.products = []
        
    def scrape_cameras(self):
        """Scrape camera products from MapCamera"""
        print("Scraping cameras...")
        
        # Camera category URLs to scrape
        camera_urls = [
            "https://www.mapcamera.com/category/camera/digital-camera",
            "https://www.mapcamera.com/category/camera/mirrorless-camera",
            "https://www.mapcamera.com/category/camera/dslr-camera"
        ]
        
        for url in camera_urls:
            try:
                print(f"Scraping: {url}")
                response = self.session.get(url)
                response.raise_for_status()
                
                soup = BeautifulSoup(response.content, 'html.parser')
                product_links = soup.find_all('a', href=True)
                
                # Find product links
                for link in product_links:
                    href = link.get('href')
                    if '/item/' in href and href not in [p.get('url') for p in self.products]:
                        product_url = urljoin(self.base_url, href)
                        self.scrape_product(product_url)
                        time.sleep(random.uniform(1, 3))  # Be respectful
                        
            except Exception as e:
                print(f"Error scraping {url}: {e}")
                
    def scrape_lenses(self):
        """Scrape lens products from MapCamera"""
        print("Scraping lenses...")
        
        lens_urls = [
            "https://www.mapcamera.com/category/lens/wide-angle-lens",
            "https://www.mapcamera.com/category/lens/standard-lens",
            "https://www.mapcamera.com/category/lens/telephoto-lens"
        ]
        
        for url in lens_urls:
            try:
                print(f"Scraping: {url}")
                response = self.session.get(url)
                response.raise_for_status()
                
                soup = BeautifulSoup(response.content, 'html.parser')
                product_links = soup.find_all('a', href=True)
                
                for link in product_links:
                    href = link.get('href')
                    if '/item/' in href and href not in [p.get('url') for p in self.products]:
                        product_url = urljoin(self.base_url, href)
                        self.scrape_product(product_url)
                        time.sleep(random.uniform(1, 3))
                        
            except Exception as e:
                print(f"Error scraping {url}: {e}")
    
    def scrape_product(self, product_url):
        """Scrape individual product details"""
        try:
            print(f"  Scraping product: {product_url}")
            response = self.session.get(product_url)
            response.raise_for_status()
            
            soup = BeautifulSoup(response.content, 'html.parser')
            
            # Extract product information
            product = {
                'id': len(self.products) + 1,
                'url': product_url,
                'title': self.extract_title(soup),
                'price': self.extract_price(soup),
                'image': self.extract_image(soup),
                'description': self.extract_description(soup),
                'category': self.determine_category(product_url),
                'condition': 'new',  # MapCamera typically sells new items
                'seller': 'MapCamera',
                'rating': 5,
                'reviews': random.randint(10, 50)
            }
            
            # Only add if we have essential data
            if product['title'] and product['price']:
                self.products.append(product)
                print(f"    Added: {product['title']} - ${product['price']}")
            
        except Exception as e:
            print(f"Error scraping product {product_url}: {e}")
    
    def extract_title(self, soup):
        """Extract product title"""
        # Try multiple selectors for title
        selectors = [
            'h1.product-title',
            'h1',
            '.product-name',
            '.item-title'
        ]
        
        for selector in selectors:
            title_elem = soup.select_one(selector)
            if title_elem:
                return title_elem.get_text().strip()
        
        return None
    
    def extract_price(self, soup):
        """Extract product price"""
        # Try multiple selectors for price
        selectors = [
            '.price',
            '.product-price',
            '.item-price',
            '[data-price]'
        ]
        
        for selector in selectors:
            price_elem = soup.select_one(selector)
            if price_elem:
                price_text = price_elem.get_text().strip()
                # Extract numeric price
                import re
                price_match = re.search(r'[\d,]+', price_text.replace(',', ''))
                if price_match:
                    return int(price_match.group())
        
        return None
    
    def extract_image(self, soup):
        """Extract product image URL"""
        # Try multiple selectors for image
        selectors = [
            '.product-image img',
            '.item-image img',
            '.main-image img',
            'img[src*="product"]'
        ]
        
        for selector in selectors:
            img_elem = soup.select_one(selector)
            if img_elem and img_elem.get('src'):
                src = img_elem.get('src')
                if not src.startswith('http'):
                    src = urljoin(self.base_url, src)
                return src
        
        # Fallback to placeholder
        return f"https://picsum.photos/400/300?random={len(self.products) + 1}"
    
    def extract_description(self, soup):
        """Extract product description"""
        # Try multiple selectors for description
        selectors = [
            '.product-description',
            '.item-description',
            '.description',
            '.product-details'
        ]
        
        for selector in selectors:
            desc_elem = soup.select_one(selector)
            if desc_elem:
                return desc_elem.get_text().strip()[:200] + "..."
        
        return "Professional photography equipment from MapCamera."
    
    def determine_category(self, url):
        """Determine product category from URL"""
        if 'lens' in url.lower():
            return 'lens'
        elif 'camera' in url.lower():
            return 'camera'
        elif 'tripod' in url.lower():
            return 'tripod'
        elif 'lighting' in url.lower():
            return 'lighting'
        else:
            return 'camera'  # Default
    
    def save_to_json(self, filename='products.json'):
        """Save scraped products to JSON file"""
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(self.products, f, indent=2, ensure_ascii=False)
        print(f"\nSaved {len(self.products)} products to {filename}")
    
    def run(self):
        """Run the complete scraping process"""
        print("Starting MapCamera product scraper...")
        
        self.scrape_cameras()
        self.scrape_lenses()
        
        print(f"\nScraped {len(self.products)} products total")
        self.save_to_json()
        
        return self.products

def main():
    scraper = MapCameraScraper()
    products = scraper.run()
    
    # Also create a JavaScript file for easy integration
    js_content = f"""
// Auto-generated product data from MapCamera
const gearData = {json.dumps(products, indent=2)};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {{
    module.exports = gearData;
}}
"""
    
    with open('products.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print("Created products.js for JavaScript integration")
    print(f"Total products scraped: {len(products)}")

if __name__ == "__main__":
    main() 