FROM ubuntu:noble

LABEL dev.containers.features="common"

# reference from: https://github.com/docker-library/buildpack-deps/blob/60dc5f9555c521de086b2f5770514faf69ee2cc4/ubuntu/noble/curl/Dockerfile
RUN set -eux; \
	apt-get update; \
	apt-get install -y --no-install-recommends \
		ca-certificates \
		curl \
		gnupg \
		netbase \
		sq \
		wget \
		tzdata \
	; \
	apt-get dist-clean

RUN  \
	if id "ubuntu" &>/dev/null; then \
	echo "Deleting user 'ubuntu'" && userdel -f -r ubuntu || echo "Failed to delete ubuntu user"; \
	else \
	echo "User 'ubuntu' does not exist"; \
	fi
