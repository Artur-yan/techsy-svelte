# Techsy-website

## Developing

npm install

npm run dev

# DEPLOYMENT

root password for the server, when you work with SSH or SCP
MaeXAt0YEFHpl1QwGAT92h

```
tar cvzf techsy.tar.gz Techsy-website/
scp techsy.tar.gz root@159.65.122.62:/root/techsy
ssh root@159.65.122.62
cd techsy
tar -xzvf techsy.tar.gz
cd Techsy-website
docker compose build
docker compose up -d
```
