import axios from "axios";

//For add property
export const addProperty = async (body) => {
  const { propert_images } = body;

  const formData = new FormData();
  formData.append("file", propert_images);

  const upload_img = await axios.post(
    "http://localhost:8888/api/upload-image",
    formData
  );

  body.propert_images = upload_img.data;

  const res = await axios.post(
    "http://localhost:8888/api/properties/add-property",
    body
  );

  return res.data;
};

export const getProperties = async (filters) => {
  try {
    const req = await axios.get(
      "http://localhost:8888/api/properties/get-property",
      {
        params: {
          type: filters.type || undefined,
          "price[lt]": filters.price || undefined,
          location: filters.location || undefined,
          limit: filters.limit || undefined,
        },
      }
    );
    return req.data;
  } catch (e) {
    return `${e}`;
  }
};
