# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?origin=place_id:ChIJ-3t2CzPN1IkRGW2nncyZuNs&destination=place_id:ChIJkdQtwEo5K4gRxQ4DxOldHbQ&mode=transit&transit_mode=bus&transit_routing_preference=less_walking&waypoint_place_ids=EjhMYXdyZW5jZSBBdmUgVyAmIEphbmUgU3QsIE5vcnRoIFlvcmssIE9OIE05TiAyUjgsIENhbmFkYSJmImQKFAoSCS3CqVY7MSuIEWBvpYdmAb0KEhQKEgktwqlWOzEriBFgb6WHZgG9ChoUChIJ3ztNHtkzK4gRr7rmWJguSG4aFAoSCbWq2LnJKCuIESefiFzF-E8mIgoN7IYMGhUbs5zQ&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

Copy/paste the JSON results and save them into the empty file ```mydirections.json``` in this repository

## Optional URLs

Read the Rubric to find out about what options exist to earn more marks. Here is where you can provide these additional links to place ids or other items telling a story about your chosen directions API

### Simple option:

(returns map-preferred) Maps PlaceID search: https://www.google.com/maps/place/?q=place_id:ChIJFfiCrdo4Qm0RqPwuOAVtaj8
### Efficient option

(returns JSON) API PlaceID link https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJV2BQ4laeekgRFauLvdXbFXE&key=<INSERTKEY>

  which the JSON will have a CID that can be directly used as a URL like https://maps.google.com/?cid=4569584641105657000


____
## Rubric

Note: MarkDown (.md) documents are not HTML and therefore are best viewed in the github.com website, not on the pages github.io page. Marking will occur using the github.com source. 

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown and results in the JSON file with a unique origin and destination in directions earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%. Explore the API documentation for parameters we have not used.
4. Tell the story of your route. Include more than 2 "stops", and/or including additional links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
