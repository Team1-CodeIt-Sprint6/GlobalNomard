import { Map, MapMarker } from 'react-kakao-maps-sdk';

export default function KakaoMap() {
  return (
    <>
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: '100%', height: '360px' }}
      >
        <MapMarker
          position={{ lat: 33.55635, lng: 126.795841 }}
          image={{
            src: '/assets/icons/icon_symbol.svg',
            size: {
              width: 65,
              height: 65,
            },
          }}
        ></MapMarker>
      </Map>
    </>
  );
}
