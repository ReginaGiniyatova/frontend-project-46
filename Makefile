install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

gendiff:
	node ./bin/gendiff.js


test: 
	npm test

test-coverage: 
	npm test -- --coverage --coverageProvider=v8

test-watch:
	npm test -- --watch






