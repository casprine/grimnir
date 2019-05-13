import { useStaticRendering } from 'mobx-react';

// mobx stores
import AuthStore from './authStore';
import CommonStore from './commonStore';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;

/**
 @params {initialData} write docs later
 */

export default function initializeStore() {
  if (isServer) {
    return {
      authStore: new AuthStore(),
      commonStore: new CommonStore(),
    };
  }

  if (store === null) {
    store = {
      authStore: new AuthStore(),
      commonStore: new CommonStore(),
    };
  }

  return store;
}
