import Expo from 'expo';
import React from 'react';
import { THREE } from 'expo-three';

import "expo-asset-utils";
import "three";
import "react-native-console-time-polyfill";
import "text-encoding";
import "xmldom-qsa";

export default class Group extends THREE.Group {
  constructor({ ...props }) {
    super(props);
  }

  removeAll = () => {
    while (this.children.length) {
      this.remove(this.children[0]);
    }
  };

  forEachAlive = (callback, callbackContext, args) => {
    this.traverse(function(node) {
      if (node.alive) {
        callback(node);
      }
    });
  };
}