func processImg(path string) (image.Image, error) {
	imageImport, err := os.Open(path)
	if err != nil {
		return nil, fmt.Errorf("failed to open image at path `%s`: %s", path, err)
	}

	image, err := png.Decode(imageImport)
	if err != nil {
		return nil, fmt.Errorf("failed to decode image at path `%s`: %s", path, err)
	}
	defer imageImport.Close()
	return image, nil
}