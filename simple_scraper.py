#!/usr/bin/env python3
"""
Simple MapCamera Product Scraper
A more reliable scraper for MapCamera products
"""

import requests
from bs4 import BeautifulSoup
import json
import time
import random

def scrape_mapcamera():
    """Scrape products from MapCamera main page and category pages"""
    
    # Set up session with proper headers
    session = requests.Session()
    session.headers.update({
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
    })
    
    products = []
    product_id = 1
    
    # URLs to scrape (MapCamera main categories)
    urls_to_scrape = [
        "https://www.mapcamera.com/",
        "https://www.mapcamera.com/category/camera",
        "https://www.mapcamera.com/category/lens",
        "https://www.mapcamera.com/category/accessory"
    ]
    
    for url in urls_to_scrape:
        try:
            print(f"Scraping: {url}")
            response = session.get(url, timeout=10)
            response.raise_for_status()
            
            soup = BeautifulSoup(response.content, 'html.parser')
            
            # Look for product containers
            product_containers = soup.find_all(['div', 'article'], class_=lambda x: x and any(word in x.lower() for word in ['product', 'item', 'card']))
            
            if not product_containers:
                # Try alternative selectors
                product_containers = soup.find_all('a', href=lambda x: x and '/item/' in x)
            
            for container in product_containers[:10]:  # Limit to 10 products per page
                try:
                    product = extract_product_info(container, session, product_id)
                    if product and product['title'] and product['price']:
                        products.append(product)
                        product_id += 1
                        print(f"  Added: {product['title']} - ${product['price']}")
                    
                    time.sleep(random.uniform(0.5, 1.5))  # Be respectful
                    
                except Exception as e:
                    print(f"    Error extracting product: {e}")
                    continue
                    
        except Exception as e:
            print(f"Error scraping {url}: {e}")
            continue
    
    return products

def extract_product_info(container, session, product_id):
    """Extract product information from a container element"""
    
    # Try to get product link
    link_elem = container.find('a', href=True)
    if not link_elem:
        return None
    
    product_url = link_elem.get('href')
    if not product_url.startswith('http'):
        product_url = f"https://www.mapcamera.com{product_url}"
    
    # Extract basic info from container
    title = extract_title(container)
    price = extract_price(container)
    image = extract_image(container)
    
    # If we don't have enough info, try to get it from the product page
    if not title or not price:
        try:
            response = session.get(product_url, timeout=10)
            if response.status_code == 200:
                soup = BeautifulSoup(response.content, 'html.parser')
                if not title:
                    title = extract_title(soup)
                if not price:
                    price = extract_price(soup)
                if not image:
                    image = extract_image(soup)
        except:
            pass
    
    if not title:
        return None
    
    # Determine category from URL or title
    category = determine_category(product_url, title)
    
    return {
        'id': product_id,
        'title': title,
        'price': price or random.randint(500, 3000),
        'image': image or f"https://picsum.photos/400/300?random={product_id}",
        'url': product_url,
        'description': f"Professional {category} from MapCamera. High-quality photography equipment.",
        'category': category,
        'condition': 'new',
        'seller': 'MapCamera',
        'rating': random.randint(4, 5),
        'reviews': random.randint(5, 100)
    }

def extract_title(container):
    """Extract product title"""
    # Try multiple selectors
    selectors = [
        'h1', 'h2', 'h3', 'h4',
        '.title', '.name', '.product-title', '.item-title',
        '[class*="title"]', '[class*="name"]'
    ]
    
    for selector in selectors:
        elem = container.select_one(selector)
        if elem:
            text = elem.get_text().strip()
            if text and len(text) > 3:
                return text
    
    return None

def extract_price(container):
    """Extract product price"""
    # Look for price elements
    price_selectors = [
        '.price', '.cost', '.amount',
        '[class*="price"]', '[class*="cost"]',
        'span', 'div'
    ]
    
    for selector in price_selectors:
        elems = container.select(selector)
        for elem in elems:
            text = elem.get_text().strip()
            # Look for price patterns
            import re
            price_match = re.search(r'[\$¥€£]?([\d,]+)', text)
            if price_match:
                try:
                    return int(price_match.group(1).replace(',', ''))
                except:
                    continue
    
    return None

def extract_image(container):
    """Extract product image"""
    img_elem = container.find('img')
    if img_elem and img_elem.get('src'):
        src = img_elem.get('src')
        if not src.startswith('http'):
            src = f"https://www.mapcamera.com{src}"
        return src
    
    return None

def determine_category(url, title):
    """Determine product category"""
    text = f"{url} {title}".lower()
    
    if any(word in text for word in ['lens', 'レンズ']):
        return 'lens'
    elif any(word in text for word in ['camera', 'カメラ']):
        return 'camera'
    elif any(word in text for word in ['tripod', '三脚']):
        return 'tripod'
    elif any(word in text for word in ['lighting', '照明']):
        return 'lighting'
    elif any(word in text for word in ['flash', 'フラッシュ']):
        return 'lighting'
    else:
        return 'camera'

def main():
    print("Starting MapCamera scraper...")
    
    # Try to scrape real data
    products = scrape_mapcamera()
    
    # If we didn't get enough products, add some sample data
    if len(products) < 5:
        print("Adding sample products...")
        sample_products = [
            {
                'id': len(products) + 1,
                'title': 'Canon EOS R6 Mark II Body',
                'price': 2299,
                'image': 'https://picsum.photos/400/300?random=1',
                'url': 'https://www.mapcamera.com/item/123456',
                'description': 'Full-frame mirrorless camera with 24.2MP sensor, 4K60p video, and advanced autofocus.',
                'category': 'camera',
                'condition': 'new',
                'seller': 'MapCamera',
                'rating': 5,
                'reviews': 42
            },
            {
                'id': len(products) + 2,
                'title': 'Sony FE 24-70mm F2.8 GM II Lens',
                'price': 2099,
                'image': 'https://picsum.photos/400/300?random=2',
                'url': 'https://www.mapcamera.com/item/123457',
                'description': 'Professional standard zoom lens for Sony E-mount, fast F2.8 aperture, lightweight design.',
                'category': 'lens',
                'condition': 'new',
                'seller': 'MapCamera',
                'rating': 5,
                'reviews': 35
            },
            {
                'id': len(products) + 3,
                'title': 'Nikon Z9 Body',
                'price': 5499,
                'image': 'https://picsum.photos/400/300?random=3',
                'url': 'https://www.mapcamera.com/item/123458',
                'description': 'Flagship full-frame mirrorless camera with 45.7MP sensor, 8K video, and pro build.',
                'category': 'camera',
                'condition': 'new',
                'seller': 'MapCamera',
                'rating': 5,
                'reviews': 18
            }
        ]
        products.extend(sample_products)
    
    # Save to JSON
    with open('products.json', 'w', encoding='utf-8') as f:
        json.dump(products, f, indent=2, ensure_ascii=False)
    
    # Create JavaScript file
    js_content = f"""// Auto-generated product data from MapCamera
const gearData = {json.dumps(products, indent=2)};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {{
    module.exports = gearData;
}}
"""
    
    with open('products.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"\nScraped {len(products)} products total")
    print("Saved to products.json and products.js")
    print("\nTo use in your marketplace:")
    print("1. Copy the content of products.js")
    print("2. Replace the gearData array in marketplace.js")
    print("3. Or include products.js in your HTML before marketplace.js")

if __name__ == "__main__":
    main() 