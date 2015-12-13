# spring-security-and-angular-js

## Run with Docker
```sh
# garbagetown at garbagetown.local in ~/dev/repos/spring-security-and-angular-js/resource on git:v3_vanilla o [16:08:08]
$ docker-machine start dev
Starting VM...

# garbagetown at garbagetown.local in ~/dev/repos/spring-security-and-angular-js/resource on git:v3_vanilla x [16:10:01]
$ docker-machine env dev
export DOCKER_TLS_VERIFY="1"
export DOCKER_HOST="tcp://192.168.99.100:2376"
export DOCKER_CERT_PATH="/Users/garbagetown/.docker/machine/machines/dev"
export DOCKER_MACHINE_NAME="dev"
# Run this command to configure your shell:
# eval "$(docker-machine env dev)"

# garbagetown at garbagetown.local in ~/dev/repos/spring-security-and-angular-js/resource on git:v3_vanilla x [16:10:19]
$ eval "$(docker-machine env dev)"

# garbagetown at garbagetown.local in ~/dev/repos/spring-security-and-angular-js/resource on git:v3_vanilla x [16:10:25]
$ docker run -d --name redis -p 6379:6379 redis
Unable to find image 'redis:latest' locally
latest: Pulling from redis

2c788329cf71: Pull complete
c1661b87f436: Pull complete
b51cce3f40c4: Pull complete
96352f1283ac: Pull complete
cb39ca092574: Pull complete
507bfdd6d983: Pull complete
1873acdc56a0: Pull complete
569b9d64d0cf: Pull complete
d7f2757043fe: Pull complete
56d21a44f979: Pull complete
27fcb5c8c671: Pull complete
29d778d111fe: Pull complete
b8713ba05538: Pull complete
9de703999fe2: Pull complete
2342c9cd4153: Pull complete
7d9ec8819098: Pull complete
bca7dc7cfafe: Pull complete
redis:latest: The image you are pulling has been verified. Important: image verification is a tech preview feature and should not be relied on to provide security.

Digest: sha256:e8bc9f39daf4e6dad4e97d0d4393b4601faa3c521fd433c577fd7678a7a74647
Status: Downloaded newer image for redis:latest
b2091a2b901dd5ffb5c8225feaffc81f3c6251a6b8c1dc0e961b4daa563cd391

# garbagetown at garbagetown.local in ~/dev/repos/spring-security-and-angular-js/resource on git:v3_vanilla x [16:11:35]
$ docker ps
CONTAINER ID        IMAGE               COMMAND                CREATED             STATUS              PORTS                    NAMES
b2091a2b901d        redis               "/entrypoint.sh redi   3 seconds ago       Up 11 seconds       0.0.0.0:6379->6379/tcp   redis
```
