export function toSearchPlacesParams(params) {
  const result = {
    term: 'food',
    latitude: params.latitude,
    longitude: params.longitude,
    radius: params.radius,
    limit: 50,
    open_now: true,
  };

  if (params.categories) {
    result.categories = params.categories.join(',');
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

export function fromSearchPlaceParams(params) {
  const result = fromSearchPlacesParams(params);
  result.coordinates = params.coordinates;
  result.photos = params.photos;

  return result;
}
