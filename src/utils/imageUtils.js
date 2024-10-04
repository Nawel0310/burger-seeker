
export const getImagenBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const img = new Image();
            img.src = reader.result;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                // Redimensionar la imagen
                const maxWidth = 480; // Ajusta este valor según lo que necesites
                const maxHeight = 480; // Ajusta este valor según lo que necesites
                let width = img.width;
                let height = img.height;

                // Mantener la relación de aspecto
                if (width > height) {
                    if (width > maxWidth) {
                        height *= maxWidth / width;
                        width = maxWidth;
                    }
                } else {
                    if (height > maxHeight) {
                        width *= maxHeight / height;
                        height = maxHeight;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);

                // Convertir a base64 y comprimir la imagen a JPEG
                canvas.toBlob((blob) => {
                    const readerBlob = new FileReader();
                    readerBlob.onloadend = () => {
                        const base64data = readerBlob.result.split(',')[1];
                        resolve(base64data);
                    };
                    blob && readerBlob.readAsDataURL(blob);
                }, 'image/png', 1); // 0.8 es la calidad de compresión (0 a 1)
            };
            img.onerror = reject;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};
