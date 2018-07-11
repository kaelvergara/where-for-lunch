import { Router } from 'express';

import { searchPlaces, searchPlace } from '../services/yelp';
import {
  toSearchPlacesParams,
  fromSearchPlacesParams,
  fromSearchPlaceParams,
} from '../lib/placeHelper';

const router = Router();
router.get('/', async (req, res) => {
  const list = await searchPlaces(toSearchPlacesParams(req.query));
  res.send(list.map(i => fromSearchPlacesParams(i)));
});

router.get('/:id', async (req, res) => {
  const details = await searchPlace(req.params.id);
  res.send(fromSearchPlaceParams(details));
});

export default router;
