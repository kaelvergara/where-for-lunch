export function toSearchPlacesParams(params) {
  const result = {
    term: 'food',
    latitude: params.latitude,
    longitude: params.longitude,
    radius: params.radius,
    limit: 50,
    open_now: false,
  };

  if (params.categories) {
    result.categories = params.categories.reduce((acc, category) => `${acc},${category}`);
  }
  return result;
}

export function fromSearchPlacesParams(params) {
  const result = {
    rating: params.rating,
    price: params.price,
    phone: params.phone,
    id: params.id,
    name: params.name,
    img: params.image_url,
    distance: params.distance,
    address: params.location.display_address.join(', '),
    categories: params.categories ? params.categories.map(c => c.title) : null,
    reviewCount: params.review_count,
  };
  return result;
}

export function fromGetPlaceDetailsParams(params) {
  const result = {
    id: params.id,
    name: params.name,
    image_url: params.image_url,
    url: params.url,
    display_phone: params.display_phone,
    review_count: params.review_count,
    categories: params.categories,
    rating: params.rating,
    location: params.location,
    coordinates: params.coordinates,
    photos: params.photos,
    price: params.price,
  };
  return result;
}
