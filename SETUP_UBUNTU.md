# RideFresh Website Setup on Ubuntu Virtual Machine

## Prerequisites
- Ubuntu 20.04 or later
- Root or sudo access
- Internet connection

## Option 1: Development Setup (Recommended for testing)

### Step 1: Install Node.js and pnpm
```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install Node.js (using NodeSource repository)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install pnpm globally
sudo npm install -g pnpm

# Verify installations
node --version
pnpm --version
```

### Step 2: Install Git
```bash
sudo apt install git -y
```

### Step 3: Clone and Setup Project
```bash
# Create project directory
mkdir ~/ridefresh-website
cd ~/ridefresh-website

# Copy all project files here (use SCP, FTP, or Git)
# If using Git, clone your repository:
# git clone <your-repository-url> .

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

### Step 4: Access the Website
- The website will be available at: `http://localhost:5173`
- To access from other devices on the network, use: `http://YOUR_VM_IP:5173`

### Step 5: Get VM IP Address (if needed)
```bash
# Find your VM's IP address
ip addr show | grep inet
# or
hostname -I
```

---

## Option 2: Production Setup (Static Files)

### Step 1: Install Web Server
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Nginx
sudo apt install nginx -y

# Start and enable Nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# Check status
sudo systemctl status nginx
```

### Step 2: Install Node.js and Build Project
```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install pnpm
sudo npm install -g pnpm

# Create project directory
mkdir ~/ridefresh-website
cd ~/ridefresh-website

# Copy project files here
# Install dependencies and build
pnpm install
pnpm run build
```

### Step 3: Configure Nginx
```bash
# Remove default Nginx site
sudo rm /etc/nginx/sites-enabled/default

# Create new site configuration
sudo nano /etc/nginx/sites-available/ridefresh
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name your_domain.com;  # Replace with your domain or use _ for any
    
    root /home/ubuntu/ridefresh-website/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Step 4: Enable Site and Restart Nginx
```bash
# Enable the site
sudo ln -s /etc/nginx/sites-available/ridefresh /etc/nginx/sites-enabled/

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx

# Copy built files to web directory
sudo cp -r ~/ridefresh-website/dist/* /var/www/html/
# Or update the nginx config to point to your build directory
```

### Step 5: Configure Firewall (if enabled)
```bash
# Allow HTTP and HTTPS traffic
sudo ufw allow 'Nginx Full'

# Or allow specific ports
sudo ufw allow 80
sudo ufw allow 443
```

### Step 6: Access Your Website
- Visit `http://YOUR_VM_IP` or `http://your_domain.com`

---

## Optional: Enable HTTPS with Let's Encrypt

### Install Certbot
```bash
sudo apt install snapd
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
```

### Get SSL Certificate
```bash
# Replace with your actual domain
sudo certbot --nginx -d your_domain.com
```

---

## Troubleshooting

### Port 5173 not accessible (Development)
```bash
# Allow port through firewall
sudo ufw allow 5173

# Or start dev server on all interfaces
pnpm run dev --host 0.0.0.0
```

### Nginx Permission Issues
```bash
# Fix permissions
sudo chown -R www-data:www-data /var/www/html/
sudo chmod -R 755 /var/www/html/
```

### Check Nginx Logs
```bash
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

---

## Quick Commands Summary

**Development:**
```bash
cd ~/ridefresh-website
pnpm run dev --host 0.0.0.0
```

**Production Build:**
```bash
cd ~/ridefresh-website
pnpm run build
sudo cp -r dist/* /var/www/html/
sudo systemctl restart nginx
```

**Check Status:**
```bash
sudo systemctl status nginx
sudo nginx -t
```