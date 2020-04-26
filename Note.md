# docker 运行

```sh
docker-compose build 
docker-compose up -d # 是不是要加 -d 取决于你要不要挂后台
# 这两步无非就是正常的npm i && npm run dev
docker exec -it my_notes_blog_1 npm i
docker exec -it my_notes_blog_1 npm run dev
```