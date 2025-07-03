FROM ubuntu:latest
LABEL authors="gky"

ENTRYPOINT ["top", "-b"]