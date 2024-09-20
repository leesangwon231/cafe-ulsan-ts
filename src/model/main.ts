export type MainPageImage = {
    "logo" : string,
    "image" : string[],
}

export type SliderImage = Pick<MainPageImage, 'image'>;