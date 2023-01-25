export const uploadToS3 = async (args, file) => {
  // Create form data.
  const formData = new FormData()

  // Add fields to form data.
  Object.keys(args.fields).forEach(key => {
    formData.append(key, args.fields[key])
  })

  // Add file.
  formData.append('file', file)

  // Configure request options.
  const options = {
    method: 'POST',
    mode: 'no-cors',
    body: formData
  }

  // Upload to S3.
  const data = await fetch(args.url, options)
    .then(data => data)

  return data
}

export const presignUpload = async (fileData, baseUrl) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(fileData),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const data = await fetch(`${baseUrl}/api/files/presign`, options)
    .then(res => res.json())

  return data
}