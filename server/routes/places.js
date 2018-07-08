import { Router } from 'express';

import { searchPlaces, searchPlaceDetails } from '../services/yelp';
import {
  toSearchPlacesParams,
  fromSearchPlacesParams,
  fromGetPlaceDetailsParams,
} from '../lib/placeHelper';

const router = Router();
router.get('/', async (req, res) => {
  const list = await searchPlaces(toSearchPlacesParams(req.query));
  res.send(list.map(i => fromSearchPlacesParams(i)));
});

router.get('/:id', async (req, res) => {
  const details = await searchPlaceDetails(req.params.id);
  res.send(fromGetPlaceDetailsParams(details));
});

export default router;
