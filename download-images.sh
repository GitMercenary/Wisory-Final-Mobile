#!/bin/bash
# Script to download Unsplash images locally

cd public

# Real Estate page images
curl -L "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80" -o service-real-estate-hero.jpg
curl -L "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80" -o service-real-estate-1.jpg
curl -L "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80" -o service-real-estate-2.jpg
curl -L "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80" -o service-real-estate-3.jpg
curl -L "https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&w=1600&q=80" -o service-real-estate-4.jpg

# HR & Talent page images
curl -L "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2000&q=80" -o service-hr-talent-hero.jpg
curl -L "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80" -o service-hr-talent-1.jpg
curl -L "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80" -o service-hr-talent-2.jpg
curl -L "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=80" -o service-hr-talent-3.jpg

# IT Infrastructure page images
curl -L "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80" -o service-it-infrastructure-hero.jpg
curl -L "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=80" -o service-it-infrastructure-1.jpg
curl -L "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1600&q=80" -o service-it-infrastructure-2.jpg
curl -L "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80" -o service-it-infrastructure-3.jpg
curl -L "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80" -o service-it-infrastructure-4.jpg

# Compliance page images
curl -L "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=80" -o service-compliance-hero.jpg
curl -L "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80" -o service-compliance-1.jpg
curl -L "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=80" -o service-compliance-2.jpg
curl -L "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80" -o service-compliance-3.jpg
curl -L "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=1600&q=80" -o service-compliance-4.jpg

# Finance & Automation page images
curl -L "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=2000&q=80" -o service-finance-automation-hero.jpg
curl -L "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80" -o service-finance-automation-1.jpg
curl -L "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80" -o service-finance-automation-2.jpg
curl -L "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=80" -o service-finance-automation-3.jpg
curl -L "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80" -o service-finance-automation-4.jpg

# Governance page images
curl -L "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2000&q=80" -o service-governance-hero.jpg
curl -L "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80" -o service-governance-1.jpg
curl -L "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=1600&q=80" -o service-governance-2.jpg
curl -L "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80" -o service-governance-3.jpg
curl -L "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=80" -o service-governance-4.jpg

echo "All images downloaded successfully!"
