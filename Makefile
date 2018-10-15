fontello:
	fontello-cli install --config ./src/fontello/config.json --font ./tmp_icons --css ./tmp_icons
	cp -R ./tmp_icons/rnts-icon.ttf ./src/fontello/rnts-icon.ttf
	rm -rf ./tmp_icons

build-js:
	rm -rf dist
	mkdir dist
	cp -R ./src/fonts ./dist
	rm -rf ./dist/fonts/index.tsx
	cp -R ./src/fontello ./dist
	rm -rf ./dist/fontello/index.tsx
	tsc --project tsconfig.json --skipLibCheck
