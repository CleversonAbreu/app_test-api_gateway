## Docker

Is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
docker build --pull --rm -f "Dockerfile" -t api-gateway:latest .
docker run -p 3000:3000 --name api-gateway-container api-gateway:latest
```
