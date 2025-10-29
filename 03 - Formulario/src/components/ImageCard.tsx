import React, { HtmlHTMLAttributes } from 'react';
import ImageCats from './ImageCats';

type ImageCardProps = {
    src: string;
    legenda: string;
};

export default function ImageCard({src, legenda}: ImageCardProps){
    return (
        <figure style={{
        border: '1px solid #e0e0e0',
        borderRadius: 8,
        padding: 8,
        maxWidth: 320,
        textAlign: 'center',
    }}>
        <img 
        src={src}
        alt={legenda}
        style={{
            width: '100%',
            height: 'auto',
            borderRadius: 6,
            objectFit: 'cover',
        }}
        onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = 'none';
        }}
        />
        <figcaption style={{marginTop: 8, fontSize: 14,}}>{legenda}</figcaption>
    </figure>
)}
    

//export default ImageCard; ----- Aqui ou lá na function() mesmo.