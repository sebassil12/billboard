import { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Button, Typography, TextField } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const DragAndDropUploader = () => {
  const [image, setImage] = useState<string | null>(null);
  const [text, setText] = useState("");
  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target) {
          const base64Image = e.target.result as string;
          setImage(base64Image);
          localStorage.setItem("uploadedImage", base64Image);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {"image/*":[]},
    maxFiles: 1,
  });

  useEffect(() => {
    const savedImage = localStorage.getItem("uploadedImage");
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={2}
      padding={2}
    >
      <Typography variant="h6">Upload and Preview Image</Typography>
      <Box
        {...getRootProps()}
        border="2px dashed #ccc"
        borderRadius="8px"
        padding={4}
        textAlign="center"
        width="100%"
        maxWidth="400px"
        bgcolor={isDragActive ? "#f0f8ff" : "transparent"}
        style={{ cursor: "pointer" }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <Typography>Drop the image here...</Typography>
        ) : (
          <Box display="flex" flexDirection="column" alignItems="center">
            <CloudUploadIcon fontSize="large" />
            <Typography>Drag & Drop your image here, or click to upload</Typography>
          </Box>
        )}
      </Box>
      <Button
        variant="contained"
        component="label"
        sx={{ marginTop: 2 }}
        startIcon={<CloudUploadIcon />}
      >
        Choose File
        <input
          hidden
          accept="image/*"
          type="file"
          onChange={(e) => {
            const files = e.target.files;
            if (files && files[0]) {
              onDrop([files[0]]);
            }
          }}
        />
      </Button>
      {image && (
        <Box
          marginTop={2}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography variant="subtitle1">Preview:</Typography>
          <img
            src={image}
            alt="Uploaded Preview"
            style={{
              maxWidth: "300px",
              maxHeight: "300px",
              borderRadius: "8px",
              marginTop: "10px",
            }}
          />
          <TextField
            variant="outlined"
            label="Editable Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            fullWidth
            sx={{ marginTop: 2, maxWidth: "300px" }}
          />
        </Box>
      )}
    </Box>
  );
};

export default DragAndDropUploader;
