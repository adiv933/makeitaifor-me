// fetches.tsx
export const fetchUser = (setUser) => {
  return fetch('https://api.makeitaifor.me/auth/cognito/me', { method: 'GET', credentials: 'include',})
  .then((res) => {
    if (!res.ok) { throw new Error('Not authorized'); }
    return res.json();
  })
  .then((data) => {
    console.log("fetchUser data: ", data);
    setUser(data);
  })
  .catch((error) => {
    setUser(null);
  });
};

export const handleFilesUpload = async (files: File[]) => {
  if (!files || files.length === 0) {
    return;
  }

  const uploadPromises = files.map(async (file) => {
    // Call backend to get the pre-signed URL
    const response = await fetch(
      `http://localhost:3000/fileupload/generate-presigned-url?filename=${file.name}&mimetype=${file.type}`,
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    const { uploadUrl } = responseData;

    // Upload the file directly to S3
    const uploadResponse = await fetch(uploadUrl, {
      method: 'PUT',
      body: file,
      headers: {
        'Content-Type': file.type,
      },
    });

    if (!uploadResponse.ok) {
      throw new Error(`File upload was not successful for ${file.name}`);
    }

    console.log(`File ${file.name} uploaded successfully`);
  });

  // Wait for all uploads to complete
  await Promise.all(uploadPromises);
};
