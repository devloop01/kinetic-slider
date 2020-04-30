console.clear();

const images = [
	"images/image-1.jpg",
	"images/image-2.jpg",
	"images/image-3.jpg",
];
const texts = [["FLOWERS"], ["MOUNTAINS"], ["FOREST"]];

const slider = new rgbKineticSlider({
	slideImages: images,
	itemsTitles: texts,

	backgroundDisplacementSprite: "images/map-9.jpg",
	cursorDisplacementSprite: "images/displace-circle.png",

	cursorImgEffect: true,
	cursorTextEffect: false,
	cursorScaleIntensity: 0.6,
	cursorMomentum: 0.2,

	swipe: true,
	swipeDistance: window.innerWidth * 0.35,
	swipeScaleIntensity: 2,

	slideTransitionDuration: 1.2,
	transitionScaleIntensity: 30,
	transitionScaleAmplitude: 160,

	nav: true,
	navElement: ".main-nav",

	// imagesRgbEffect: false,
	// imagesRgbIntensity: 0.9,
	// navImagesRgbIntensity: 80,

	textsDisplay: true,
	textTitleSize: 130,
	textsTiltEffect: true,
	googleFonts: ["Playfair Display: 700"],
	textsRgbEffect: true,
	textsRgbIntensity: 1,
});
