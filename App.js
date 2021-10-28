import React, {useState, useEffect,useRef, useCallback} from 'react';
import DeckGL from '@deck.gl/react';
import {COORDINATE_SYSTEM, FlyToInterpolator} from 'deck.gl';
import {PathLayer,ScatterplotLayer} from '@deck.gl/layers';
import {GreatCircleLayer,TripsLayer} from '@deck.gl/geo-layers';

import {StaticMap} from 'react-map-gl';

import {ArcLayer} from 'deck.gl';





// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'your_mapbox_token';

// Viewport settings



// Data to be used by the LineLayer
const data = [
  {position: [-122.45, 37.78], message: 'Hover over me'}
];

function App({data}) {

  const [INITIAL_VIEW_STATE, setViewState] = useState({
    longitude: 144.9624,
    latitude: -37.8126,
    zoom: 13,
    pitch: 30,
    bearing: 0
  });

  const[opacityA, setopacityA]= useState(0)
  
  const [opacity7, setopacity7] = useState(0.5)
  const [opacity56, setopacity56] = useState(0.5)
  const [opacity4, setopacity4] = useState(0.5)
  const [opacity23, setopacity23] = useState(0.5)
  const [opacity01, setopacity01] = useState(0.5)

  const [opacityT7, setopacityT7] = useState(1)
  const [opacityT6, setopacityT6] = useState(1)
  const [opacityT5, setopacityT5] = useState(1)
  const [opacityT4, setopacityT4] = useState(1)
  const [opacityT3, setopacityT3] = useState(1)
  const [opacityT2, setopacityT2] = useState(1)
  const [opacityT1, setopacityT1] = useState(1)
  const [opacityT0, setopacityT0] = useState(1)

  const [width, setWidth] = useState(8)
  const [color, setColor] = useState([0,0,0,50])
  const [colorx, setColorx] = useState([0,0,0,50])

  const [highlightIndex0, setHighlightIndex0] = useState(-1)
  const [highlightIndex1, setHighlightIndex1] = useState(-1)
  const [highlightIndex2, setHighlightIndex2] = useState(-1)
  const [highlightIndex3, setHighlightIndex3] = useState(-1)
  const [highlightIndex4, setHighlightIndex4] = useState(-1)

  const [hoverInfo, setHoverInfo] = useState();
  const deckRef = useRef(null);
  const [coef,setCoef]= useState(0)


 
  const step = 2;
  const intervalMS = 1;
  const loopLength = 500;
  const [time, setTime] = useState(500);
  const [running,setRunning] = useState(false)
  
  
 
/*
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => (t + step) % loopLength);
    }, intervalMS);
  
    return () => clearInterval(interval);
  }, []);
 */
  const goToArc = useCallback(() => {
    setViewState({
      longitude: 144.976989,
      latitude: -37.806915,
      zoom: 14,
      pitch: 40,
      bearing: 0,
      transitionDuration: 1700,
      transitionInterpolator: new FlyToInterpolator(),
      onTransitionEnd:()=>setopacityT0(1)
    })
  }, []);

  const onHover = useCallback(event => {
    const pickInfo = deckRef.current.pickObject({
      x: event.clientX,
      y: event.clientY,
      radius: 1
    });
    if(pickInfo != null){
      if (pickInfo.layer.id === "GreatCircleLayer0" && pickInfo.index===0){
        //setopacityA(0)
        //setHighlightIndex0(0)
       // setopacity01(0)
       // setopacityT0(1)
       // setopacityT1(1)
        
        
      }
    }
    if(pickInfo != null){
      if (pickInfo.layer.id === "GreatCircleLayer1" && pickInfo.index===0){
        //setopacity23(0)
        //setHighlightIndex1(0)
        //setopacityT2(1)
        //setopacityT3(1)
        
      }
    
    }
    if(pickInfo != null){
      if (pickInfo.layer.id === "GreatCircleLayer2" && pickInfo.index===0){
       // setopacity4(0)
        //setHighlightIndex2(0)
        //setopacityT4(1)
        
        
      }
    
    }
    if(pickInfo != null){
      if (pickInfo.layer.id === "GreatCircleLayer3" && pickInfo.index===0){
       // setopacity56(0)
        //setHighlightIndex2(0)
       // setopacityT5(1)
       // setopacityT6(1)
        
        
      }
    
    }if(pickInfo != null){
      if (pickInfo.layer.id === "GreatCircleLayer4" && pickInfo.index===0){
        //setopacityT7(1)
        //setopacity7(0)
        
      }
    
    }
    if(pickInfo != null){
      if (pickInfo.layer.id === "trips-layer"){
        console.log("test")
       
      }
    }

    if(pickInfo === null){
      /*
      setopacity7(0.5)
      setopacity56(0.5)
      setopacity4(0.5)
      setopacity23(0.5)
      setopacity01(0.5)
      setopacityT0(0)
      setopacityT1(0)
      setopacityT2(0)
      setopacityT3(0)
      setopacityT4(0)
      setopacityT5(0)
      setopacityT6(0)
      setopacityT7(0)
      setHighlightIndex0(-1)
      setHighlightIndex1(-1)
      setHighlightIndex2(-1)
     */
      
    }

  }, [])

  

  
  const layers = [new PathLayer({
    
    id: 'PathLayer0',
    data: 'https://gist.githubusercontent.com/roshandevanathan/ba3ae3e07014c87f00d2c0b4c888c517/raw/688d47261ae7c7204a1df5e341d09124f8d4003d/path0.json',
    
    /* props from PathLayer class */
    
    billboard: true,
    getColor: color,
    getPath: d => d.path,
    getWidth: d => d*2,
    // miterLimit: 4,
    // rounded: true,
    // widthMaxPixels: Number.MAX_SAFE_INTEGER,
    widthMinPixels: 2,
    widthScale: 10,
    // widthUnits: 'meters',
    
    /* props inherited from Layer class */
    
     autoHighlight: false,
    // coordinateOrigin: [0, 0, 0],
    // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
    // highlightColor: [0, 0, 128, 128],
    // modelMatrix: null,
     opacity: opacity01,
    parameters: {
      depthMask: false
    },
    pickable: true,
    highlightedObjectIndex:highlightIndex0,
    //highlightedObjectIndex:3,
    
    //onClick: (info, event) => console.log('Clicked:', info.index, info),
    onHover: ()=>setopacityT0(1),
    //onClick:(width===2) ? ()=>setWidth(5) : ()=>setWidth(2),
    //onHover:(width===5) ? ()=>setColorx(240,20,20): null ,
    

    // visible: true,
    // wrapLongitude: false,
  }), new PathLayer({
    
    id: 'PathLayer1',
    data: 'https://gist.githubusercontent.com/roshandevanathan/85c4e12a0f2d65a180fe355038acdd5f/raw/4619e9919cd9d195d71ac38b708b8c85b0171474/path1.json',
    
    /* props from PathLayer class */
    
    billboard: true,
    getColor: color,
    getPath: d => d.path,
    getWidth: d => 2,
    // miterLimit: 4,
    rounded: true,
    capRounded: true,
    
    // widthMaxPixels: Number.MAX_SAFE_INTEGER,
    widthMinPixels: 2,
    widthScale: 10,
    // widthUnits: 'meters',
    
    /* props inherited from Layer class */
    
     autoHighlight: false,
    // coordinateOrigin: [0, 0, 0],
    // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
    // highlightColor: [0, 0, 128, 128],
    // modelMatrix: null,
     opacity: opacity01 ,
    parameters: {
      depthMask: false
    },
    pickable: true,
    highlightedObjectIndex:highlightIndex0,
    //highlightedObjectIndex:3,
    
    onClick: (info, event) => console.log('Clicked:', info.index, info),
    onHover: ()=>setopacityT1(1),
    


     //visible: true,
    // wrapLongitude: false,
  }),new PathLayer({
    
    id: 'PathLayer2',
    data: 'https://gist.githubusercontent.com/roshandevanathan/e21a477c0aa0e452da526492b333aefa/raw/fee11c352a81e054a0d7d431a84d1d64cb9b282f/path2.json',
    
    /* props from PathLayer class */
    
    billboard: true,
    getColor: color,
    getPath: d => d.path,
    getWidth: d => 2,
    // miterLimit: 4,
    // rounded: false,
    // widthMaxPixels: Number.MAX_SAFE_INTEGER,
    widthMinPixels: 2,
    widthScale: 10,
    // widthUnits: 'meters',
    
    /* props inherited from Layer class */
    
     autoHighlight: true,
    // coordinateOrigin: [0, 0, 0],
    // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
    // highlightColor: [0, 0, 128, 128],
    // modelMatrix: null,
     opacity: opacity23 ,
    parameters: {
      depthMask: false
    },
    pickable: true,
    highlightedObjectIndex:highlightIndex1,
    //highlightedObjectIndex:3,
    
    onClick: (info, event) => console.log('Clicked:', info.index, info),
    onHover: ()=>setopacityT2(1),
    


    // visible: true,
    // wrapLongitude: false,
  }),new PathLayer({
    
    id: 'PathLayer3',
    data: 'https://gist.githubusercontent.com/roshandevanathan/33b9ac9266cf76bad1a183f7ef7431cb/raw/392699a2396d271c78b3a0df26bca63c73b085fb/path3.json',
    
    /* props from PathLayer class */
    
    billboard: true,
    getColor: color,
    getPath: d => d.path,
    getWidth: d => 2,
    // miterLimit: 4,
    // rounded: false,
    // widthMaxPixels: Number.MAX_SAFE_INTEGER,
    widthMinPixels: 2,
    widthScale: 10,
    // widthUnits: 'meters',
    
    /* props inherited from Layer class */
    
     autoHighlight:true,
    // coordinateOrigin: [0, 0, 0],
    // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
    // highlightColor: [0, 0, 128, 128],
    // modelMatrix: null,
     opacity: opacity23 ,
    parameters: {
      depthMask: false
    },
    pickable: true,
    highlightedObjectIndex:highlightIndex1,
    //highlightedObjectIndex:3,
    
    onClick: (info, event) => console.log('Clicked:', info.index, info),
    onHover: ()=>setopacityT3(1),
    


    // visible: true,
    // wrapLongitude: false,
  }),new PathLayer({
    
    id: 'PathLayer4',
    data: 'https://gist.githubusercontent.com/roshandevanathan/8c78b8031096bd363605acf4908a0cbc/raw/5c0120424a218da0c229521f4c956bf79707ed18/path4.json',
    
    /* props from PathLayer class */
    
    billboard: true,
    getColor: color,
    getPath: d => d.path,
    getWidth: d => 2,
    // miterLimit: 4,
    // rounded: false,
    // widthMaxPixels: Number.MAX_SAFE_INTEGER,
    widthMinPixels: 2,
    widthScale: 10,
    // widthUnits: 'meters',
    
    /* props inherited from Layer class */
    
     autoHighlight:true,
    // coordinateOrigin: [0, 0, 0],
    // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
    // highlightColor: [0, 0, 128, 128],
    // modelMatrix: null,
     opacity: opacity4 ,
    parameters: {
      depthMask: false
    },
    pickable: true,
    highlightedObjectIndex:highlightIndex2,
    //highlightedObjectIndex:3,
    
    onClick: (info, event) => console.log('Clicked:', info.index, info),
    onHover: ()=>setopacityT4(1),
    


    // visible: true,
    // wrapLongitude: false,
  }),new PathLayer({
    
    id: 'PathLayer5',
    data: 'https://gist.githubusercontent.com/roshandevanathan/a05f5017546788f22fd2fa9536356da8/raw/015fd29f38c93e04fad0247cbade9b35c55a292e/path5.json',
    
    /* props from PathLayer class */
    
    billboard: true,
    getColor: color,
    getPath: d => d.path,
    getWidth: d => 2,
    // miterLimit: 4,
    // rounded: false,
    // widthMaxPixels: Number.MAX_SAFE_INTEGER,
    widthMinPixels: 2,
    widthScale: 10,
    // widthUnits: 'meters',
    
    /* props inherited from Layer class */
    
     autoHighlight:true,
    // coordinateOrigin: [0, 0, 0],
    // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
    // highlightColor: [0, 0, 128, 128],
    // modelMatrix: null,
     opacity: opacity56,
    parameters: {
      depthMask: false
    },
    pickable: true,
    highlightedObjectIndex:highlightIndex2,
    //highlightedObjectIndex:3,
    
    onClick: (info, event) => console.log('Clicked:', info.index, info),
    onHover: ()=>setopacityT5(1),
    


    // visible: true,
    // wrapLongitude: false,
  }),new PathLayer({
    
    id: 'PathLayer6',
    data: 'https://gist.githubusercontent.com/roshandevanathan/d1f3a6f7fe1358537c5485600759aa98/raw/be5a48ad992a7a1eb24ae8f6273ad613d7725394/path6.json',
    
    /* props from PathLayer class */
    
    billboard: true,
    getColor: color,
    getPath: d => d.path,
    getWidth: d => 2,
    // miterLimit: 4,
    // rounded: false,
    // widthMaxPixels: Number.MAX_SAFE_INTEGER,
    widthMinPixels: 2,
    widthScale: 10,
    // widthUnits: 'meters',
    
    /* props inherited from Layer class */
    
     autoHighlight:true,
    // coordinateOrigin: [0, 0, 0],
    // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
    // highlightColor: [0, 0, 128, 128],
    // modelMatrix: null,
     opacity: opacity56 ,
    parameters: {
      depthMask: false
    },
    pickable: true,
    highlightedObjectIndex:highlightIndex2,
    //highlightedObjectIndex:3,
    
    onClick: (info, event) => console.log('Clicked:', info.index, info),
    onHover: ()=>setopacityT6(1),
    


    // visible: true,
    // wrapLongitude: false,
  }),new PathLayer({
    
    id: 'PathLayer7',
    data: 'https://gist.githubusercontent.com/roshandevanathan/65f2a7ffb613ee33d480f9a8ef07594c/raw/366572f756107dc8527d4cfd4278a40cbcbac1f2/path7.json',
    /* props from PathLayer class */
    
    billboard: true,
    getColor: color,
    getPath: d => d.path,
    getWidth: d => 2,
    // miterLimit: 4,
    // rounded: false,
    // widthMaxPixels: Number.MAX_SAFE_INTEGER,
    widthMinPixels: 2,
    widthScale: 10,
    // widthUnits: 'meters',
    
    /* props inherited from Layer class */
    
     autoHighlight:true,
    // coordinateOrigin: [0, 0, 0],
    // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
    // highlightColor: [0, 0, 128, 128],
    // modelMatrix: null,
     opacity: opacity7,
    parameters: {
      depthMask: false
    },
    pickable: true,
    highlightedObjectIndex:highlightIndex2,
    //highlightedObjectIndex:3,
    
    onClick: (info, event) => console.log('Clicked:', info.index, info),
    onHover: ()=>setopacityT7(1),
    


    // visible: true,
    // wrapLongitude: false,
  }), new GreatCircleLayer({
    id: 'GreatCircleLayer0',
    data: 'https://gist.githubusercontent.com/roshandevanathan/6f8ef3c01ea3444b44cb2574d2eaba32/raw/bb4b06934d1b9541f661f260c17b2d30c2b5affb/new_arc0.json',
    
    /* props from GreatCircleLayer class */
    
    getHeight: 0,
    
    
    // greatCircle: true,
    
    /* props inherited from ArcLayer class */
    //getColor: [250,0,0],
    getSourceColor: [0, 255, 255,10],
    getSourcePosition: d => d.from.coordinates,
    getTargetColor: [0, 0,255],
    getTargetPosition: d => d.to.coordinates,
    
    // getTilt: 0,
    getWidth: width,
    // widthMaxPixels: Number.MAX_SAFE_INTEGER,
    widthMinPixels: 5,

    // widthScale: 1,
    // widthUnits: 'pixels',
    
    /* props inherited from Layer class */
    
    // autoHighlight: false,
    // coordinateOrigin: [0, 0, 0],
    // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
     highlightColor: [255, 0, 81,100],
    // modelMatrix: null,
    opacity: opacityA,
    pickable: true,
    autoHighlight: true,
    onClick:()=> goToArc(),
    
    
   
    //onHover: (info) =>  setHighlightIndex(0) && setHighlightIndex(1)  ,
    
    
    
   

    // visible: true,
    // wrapLongitude: false,
  }), new GreatCircleLayer({
    id: 'GreatCircleLayer1',
    data: 'https://gist.githubusercontent.com/roshandevanathan/8be58898dddbaa798c1db4805a8d3eeb/raw/9b157f2923685433bb6762fa57ef27f46d4759be/new_arc1.json',
    
    /* props from GreatCircleLayer class */
    
    getHeight: 0,
    
    
    // greatCircle: true,
    
    /* props inherited from ArcLayer class */
    //getColor: [250,0,0],
    getSourceColor: [0, 255, 255,10],
    getSourcePosition: d => d.from.coordinates,
    getTargetColor: [0, 0,255],
    getTargetPosition: d => d.to.coordinates,
    
    // getTilt: 0,
    getWidth: 12.5,
    // widthMaxPixels: Number.MAX_SAFE_INTEGER,
    widthMinPixels: 5,

    // widthScale: 1,
    // widthUnits: 'pixels',
    
    /* props inherited from Layer class */
    
    // autoHighlight: false,
    // coordinateOrigin: [0, 0, 0],
    // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
     highlightColor: [255, 0, 81,100],
    // modelMatrix: null,
    opacity: opacityA,
    pickable: true,
    autoHighlight: true,
    
    //onHover: ()=>animate()
    
   
    //onHover: (info) =>  setHighlightIndex(0) && setHighlightIndex(1)  ,
    
    
    
   

    // visible: true,
    // wrapLongitude: false,
  }),new GreatCircleLayer({
    id: 'GreatCircleLayer2',
    data: 'https://gist.githubusercontent.com/roshandevanathan/0e418dea102ebaff69cbdbff10c8b505/raw/834e868917dc6aed90bddc6ca9fb084f84534f17/new_arc2.json',
    
    /* props from GreatCircleLayer class */
    
    getHeight: 0,
    
    
    // greatCircle: true,
    
    /* props inherited from ArcLayer class */
    //getColor: [250,0,0],
    getSourceColor: [0, 255, 255,10],
    getSourcePosition: d => d.from.coordinates,
    getTargetColor: [0, 0,255],
    getTargetPosition: d => d.to.coordinates,
    
    // getTilt: 0,
    getWidth: 15,
    // widthMaxPixels: Number.MAX_SAFE_INTEGER,
    widthMinPixels: 5,

    // widthScale: 1,
    // widthUnits: 'pixels',
    
    /* props inherited from Layer class */
    
    // autoHighlight: false,
    // coordinateOrigin: [0, 0, 0],
    // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
     highlightColor: [255, 0, 81,100],
    // modelMatrix: null,
    opacity: opacityA,
    pickable: true,
    autoHighlight: true,
    
    //onHover: ()=>animate()
    
   
    //onHover: (info) =>  setHighlightIndex(0) && setHighlightIndex(1)  ,
    
    
    
   

    // visible: true,
    // wrapLongitude: false,
  }),new GreatCircleLayer({
    id: 'GreatCircleLayer3',
    data: 'https://gist.githubusercontent.com/roshandevanathan/ad9e67e7652753ca172f4c005fb87d1a/raw/ad4fe733e3d36b54379606cdda35675ab38c1b77/new_arc3.json',
    
    /* props from GreatCircleLayer class */
    
    getHeight: 0,
    
    
    // greatCircle: true,
    
    /* props inherited from ArcLayer class */
    //getColor: [250,0,0],
    getSourceColor: [0, 255, 255,10],
    getSourcePosition: d => d.from.coordinates,
    getTargetColor: [0, 0,255],
    getTargetPosition: d => d.to.coordinates,
    
    // getTilt: 0,
    getWidth: 10,
    // widthMaxPixels: Number.MAX_SAFE_INTEGER,
    widthMinPixels: 5,

    // widthScale: 1,
    // widthUnits: 'pixels',
    
    /* props inherited from Layer class */
    
    // autoHighlight: false,
    // coordinateOrigin: [0, 0, 0],
    // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
     highlightColor: [255, 0, 81,100],
    // modelMatrix: null,
    opacity: opacityA,
    pickable: true,
    autoHighlight: true,
    
    //onHover: ()=>animate()
    
  
    //onHover: (info) =>  setHighlightIndex(0) && setHighlightIndex(1)  ,
    
    
    
   

    // visible: true,
    // wrapLongitude: false,
  }),new GreatCircleLayer({
    id: 'GreatCircleLayer4',
    data: 'https://gist.githubusercontent.com/roshandevanathan/7ed10c48747c69661d2f7294a3b87891/raw/7be0a5180d466b2ca10cea8d5aea7fc6a637a2c6/new_arc4.json',
    /* props from GreatCircleLayer class */
    
    getHeight: 0,
    
    
    // greatCircle: true,
    
    /* props inherited from ArcLayer class */
    //getColor: [250,0,0],
    getSourceColor: [0, 255, 255,10],
    getSourcePosition: d => d.from.coordinates,
    getTargetColor: [0, 0,255],
    getTargetPosition: d => d.to.coordinates,
   
    // getTilt: 0,
    getWidth: 8,
    // widthMaxPixels: Number.MAX_SAFE_INTEGER,
    widthMinPixels: 5,

    // widthScale: 1,
    // widthUnits: 'pixels',
    
    /* props inherited from Layer class */
    
    // autoHighlight: false,
    // coordinateOrigin: [0, 0, 0],
    // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
     highlightColor: [255, 0, 81,100],
    // modelMatrix: null,
    opacity: opacityA,
    pickable: true,
    autoHighlight: true,
    
    
    
   
    //onHover: (info) =>  setHighlightIndex(0) && setHighlightIndex(1)  ,
    
    
    
   

    // visible: true,
    // wrapLongitude: false,
  }), new TripsLayer({
    id: 'tripLayer0',
    data: 'https://gist.githubusercontent.com/roshandevanathan/d61c33aa05f99f289289277f3f2f1d11/raw/58d8f2132dbd379a990a47ce7c6729f3cf212729/trip0.json',
    getPath: d => d.waypoints.map(p => p.coordinates),
    // deduct start timestamp from each data point to avoid overflow
    getTimestamps: d => d.waypoints.map(p => p.timestamp-1554772579000),
    getColor: [214, 202, 36],
    opacity: opacityT0,
    widthMinPixels: 5,
    widthScale: 70,
    rounded: true,
    fadeTrail: true,
    trailLength: 100,
    currentTime: time,
    autoHighlight: false,
    pickable:false,
    
  }),new TripsLayer({
    id: 'tripLayer1',
    data: 'https://gist.githubusercontent.com/roshandevanathan/9c88eb95344267811aa2bda77165a346/raw/9ebbd58a9fe36bd685725d799ef18c571e0d12b1/trip1.json',
    getPath: d => d.waypoints.map(p => p.coordinates),
    // deduct start timestamp from each data point to avoid overflow
    getTimestamps: d => d.waypoints.map(p => p.timestamp-1554772579000),
    getColor: [253, 128, 93],
    opacity: opacityT1,
    widthMinPixels: 5,
    widthScale: 10,
    rounded: true,
    fadeTrail: true,
    trailLength: 100,
    currentTime: time,
    autoHighlight: false,
    pickable:false,
    
  }),new TripsLayer({
    id: 'tripLayer2',
    data: 'https://gist.githubusercontent.com/roshandevanathan/fa5c09e50467a4f326f4931a8a008b18/raw/6310fc80bcb1ec0acde2593c4a609c93332671c6/trip2.json',
    getPath: d => d.waypoints.map(p => p.coordinates),
    // deduct start timestamp from each data point to avoid overflow
    getTimestamps: d => d.waypoints.map(p => p.timestamp-1554772579000),
    getColor: [253, 128, 93],
    opacity: opacityT2,
    widthMinPixels: 5,
    widthScale: 70,
    rounded: true,
    fadeTrail: true,
    trailLength: 100,
    currentTime: time,
    autoHighlight: false,
    pickable:false,
    
  }),new TripsLayer({
    id: 'tripLayer3',
    data: 'https://gist.githubusercontent.com/roshandevanathan/f10e96a894882f4ad60b6945863bf68d/raw/d55dd023e3d2525be924fa3707725d15750300f8/trip3.json',
    getPath: d => d.waypoints.map(p => p.coordinates),
    // deduct start timestamp from each data point to avoid overflow
    getTimestamps: d => d.waypoints.map(p => p.timestamp-1554772579000),
    getColor: [214, 0, 36],
    opacity: opacityT3,
    widthMinPixels: 5,
    widthScale: 10,
    rounded: true,
    fadeTrail: true,
    trailLength: 100,
    currentTime: time,
    autoHighlight: false,
    pickable:false,
    
    
  }),new TripsLayer({
    id: 'tripLayer4',
    data: 'https://gist.githubusercontent.com/roshandevanathan/6f195e21ce6203a1ca58724fda45c131/raw/a41b35757807c44059c9b47e63507404415f18c6/trip4.json',
    getPath: d => d.waypoints.map(p => p.coordinates),
    // deduct start timestamp from each data point to avoid overflow
    getTimestamps: d => d.waypoints.map(p => p.timestamp-1554772579000),
    getColor: [253, 128, 93],
    opacity: opacityT4,
    widthMinPixels: 5,
    widthScale: 10,
    rounded: true,
    fadeTrail: true,
    trailLength: 100,
    currentTime: time,
    autoHighlight: false,
    pickable:false,
    
    
  }),new TripsLayer({
    id: 'tripLayer5',
    data: 'https://gist.githubusercontent.com/roshandevanathan/75cb3951fb6d524b9615694b67135aea/raw/2236a9f9a9350d39f91cc06fe0669a34792bd8ec/trip5.json',
    getPath: d => d.waypoints.map(p => p.coordinates),
    // deduct start timestamp from each data point to avoid overflow
    getTimestamps: d => d.waypoints.map(p => p.timestamp-1554772579000),
    getColor: [253, 128, 93],
    opacity: opacityT5,
    widthMinPixels: 5,
    widthScale: 10,
    rounded: true,
    fadeTrail: true,
    trailLength: 100,
    currentTime: time,
    autoHighlight: false,
    pickable:false,
    
    
  }),new TripsLayer({
    id: 'tripLayer6',
    data: 'https://gist.githubusercontent.com/roshandevanathan/6ced851d701a2389a6bc366761719980/raw/f985cf21a866d96d54f6adb7651b92b9ef84c9a0/trip6.json',
    getPath: d => d.waypoints.map(p => p.coordinates),
    // deduct start timestamp from each data point to avoid overflow
    getTimestamps: d => d.waypoints.map(p => p.timestamp-1554772579000),
    getColor: [214, 20, 36],
    opacity: opacityT6,
    widthMinPixels: 5,
    widthScale: 20,
    rounded: true,
    fadeTrail: true,
    trailLength: 100,
    currentTime: time,
    autoHighlight: false,
    pickable:false,
    
    
  }),new TripsLayer({
    id: 'tripLayer7',
    data: 'https://gist.githubusercontent.com/roshandevanathan/01378555b0a10692bc0ce9be2d02cafb/raw/6ae026a1a48fbe728bdc495120966b57996a4c04/trip7.json',
    getPath: d => d.waypoints.map(p => p.coordinates),
    // deduct start timestamp from each data point to avoid overflow
    getTimestamps: d => d.waypoints.map(p => p.timestamp-1554772579000),
    getColor: [214, 202, 36],
    opacity: opacityT7,
    widthMinPixels: 5,
    widthScale: 10,
    rounded: true,
    fadeTrail: true,
    trailLength: 100,
    currentTime: time,
    autoHighlight: false,
    pickable:false,
    
    
  })
  ];

  return (
    
    <>
    
    <DeckGL
      
      initialViewState={INITIAL_VIEW_STATE}
      controller={false}
      layers={layers}
      getTooltip={({ object }) => object && {
        html: `<h2>${object.name}</h2><h2>${object.details}</h2>`,
        style: {
          backgroundColor: '#4f4f4f',
          fontSize: '0.5em',
        }
      }}
      ref={deckRef}

    >
    

      <StaticMap mapboxApiAccessToken='pk.eyJ1IjoicmRldmFuYSIsImEiOiJja3NhMWFybHAyZml6MnBwaXd1YnI0cjJoIn0.1ujOwvz355XaBY4OQuoHmw' >
        
        <div style={{ margin: "0.5rem", fontFamily: "monospace", fontSize: "18px" }}>
            Current Time: {time}
        </div>
      </StaticMap>
      <div style={{ width: '98%', marginTop: "1.5rem" }}>
        <input
          style={{ width: '100%' }}
          type="range"
          min="0"
          max="900"
          step="0.5"
          value={time}
          onChange={(e) => { setTime(Number(e.target.value)); }}
        />
      </div>
    </DeckGL>
    </>
    
        
  );
}
export default App;
