func buildTest(layers int, pathToImages, pathToStore, pngId string, config []string, metadataJson map[string]interface{}) {
	// const numLayers = layers
	var imageLayers = make([]image.Image, layers)
	// Layers correspond to the number assigned to each body part so they should be assembled in this order -> 1-9

	for i := 0; i < layers; i++ {
		if strings.Contains(config[i], "None") {
			continue
		}
		path := fmt.Sprintf("%s/%v/%s.png", pathToImages, i, config[i])
		if i == 0 {
			path = fmt.Sprintf("../gods/backgrounds/%s.png", config[i])
		}
		processed, err := processImg(path)
		if err != nil {
			log.Fatalf("Exiting due to error: %v", err)
			os.Exit(1)
		}
		imageLayers[i] = processed
	}

	b := imageLayers[0].Bounds()
	imagefinal := image.NewRGBA(b)

	for i := 0; i < layers; i++ {
		if imageLayers[i] == nil {
			continue
		}
		draw.Draw(imagefinal, imageLayers[i].Bounds(), imageLayers[i], image.ZP, draw.Over)
	}

	// Create directory for work
	err := os.Mkdir(fmt.Sprintf("%s/%s", pathToStore, pngId), 0755)
	if err != nil {
		log.Fatalf("failed to create directory `%s`: %v", pngId, err)
	}
	metadataFileName := fmt.Sprintf("%s/%v/%v.json", pathToStore, pngId, pngId)
	// // Create json file for metadata
	metadata, err := os.Create(metadataFileName)
	if err != nil {
		log.Fatalf("failed to create metadata file `%s.json`: %s", pngId, err)
	}
	file, err := json.MarshalIndent(metadataJson, "", "	")
	if err != nil {
		log.Fatalf("failed to parse metadataJson: %s", err)
	}
	err = os.WriteFile(metadataFileName, file, 0644)
	if err != nil {
		log.Fatalf("failed to write metadata to file: %s", err)
	}

	// Create png file
	final, err := os.Create(fmt.Sprintf("%s/%v/%v.png", pathToStore, pngId, pngId))
	if err != nil {
		log.Fatalf("failed to create file `%s.png`: %s", pngId, err)
	}
	err = png.Encode(final, imagefinal)
	if err != nil {
		log.Fatalf("failed to create image: %s", err)
	}
	defer final.Close()
	defer metadata.Close()
}