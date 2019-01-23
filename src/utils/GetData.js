import axios from "axios";

export function getBerita() {
  const berita = './berita.json'
  return axios.get(berita);
}

export function getDummy() {
  const dummy = "./dummy.json";
  return axios.get(dummy);
}

export function getPeta() {
  const data = "./data-wilayah.json";
  return axios.get(data);
}

export function getProvinsi() {
  const data = "./data-provinsi.json";
  return axios.get(data);
}