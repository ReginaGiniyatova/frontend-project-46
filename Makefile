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

gendiff-json:
	node bin/gendiff.js ./__fixtures__/file1.json ./__fixtures__/file2.json

gendiff-yml:
	node bin/gendiff.js ./__fixtures__/file1.yml ./__fixtures__/file2.yml	

gendiff-plain:
	node bin/gendiff.js ./__fixtures__/file1.json ./__fixtures__/file2.json -f plain

test: 
	npm test

test-coverage: 
	npm test -- --coverage --coverageProvider=v8

test-watch:
	npm test -- --watch






