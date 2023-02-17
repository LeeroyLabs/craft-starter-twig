.PHONY: up build dev composer craft boot install

up:
	ddev exec php craft clear-caches/all --interactive=0
	ddev exec php craft up
build: boot
	ddev exec yarn build
dev: build up
	if [ ! "$$(grep microsoft /proc/version)" ]; then \
		ddev launch; \
	fi
	ddev describe
	ddev exec yarn serve
composer: boot
	ddev composer \
		$(filter-out $@,$(MAKECMDGOALS))
craft: boot
	ddev exec php craft \
		$(filter-out $@,$(MAKECMDGOALS))
install: boot build
	ddev exec php craft setup/app-id \
		$(filter-out $@,$(MAKECMDGOALS))
	ddev exec php craft setup/security-key \
		$(filter-out $@,$(MAKECMDGOALS))
	ddev exec php craft install \
		$(filter-out $@,$(MAKECMDGOALS))
	ddev exec php craft plugin/install aws-s3
	ddev exec php craft plugin/install redactor
	ddev exec php craft plugin/install seomatic
	ddev exec php craft plugin/install vite
boot:
	if [ ! "$$(ddev describe | grep OK)" ]; then \
		ddev auth ssh; \
		ddev start; \
		ddev composer install; \
		ddev exec yarn install; \
	fi
%:
	@:
# ref: https://stackoverflow.com/questions/6273608/how-to-pass-argument-to-makefile-from-command-line
