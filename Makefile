fontello:
	fontello-cli install --config ./src/fontello/config.json --font ./tmp_icons --css ./tmp_icons
	cp -R ./tmp_icons/rnts-icon.ttf ./src/fontello/rnts-icon.ttf
	rm -rf ./tmp_icons
