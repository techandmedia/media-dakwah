import axios from "axios";

export function getBerita() {
  const berita = './berita.json'
  return axios.get(berita);
}

export function getDummy() {
  const dummy = "./dummy.json";
  return axios.get(dummy);
}
