import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from "styled-components";
import Search from './components/Search';

export const items = [
  {
    _id: "c2hvcHBpbmcuaXRlbTox",
    _type: "shopping.item",
    category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
    name: { en: "Pineapple", de: "Ananas" },
  },
  {
    _id: "c2hvcHBpbmcuaXRlbToy",
    _type: "shopping.item",
    category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
    name: { en: "Apples", de: "Äpfel" },
  },
  {
    _id: "c2hvcHBpbmcuaXRlbToz",
    _type: "shopping.item",
    category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
    name: { en: "Apricots", de: "Aprikosen" },
  },
  {
    _id: "c2hvcHBpbmcuaXRlbTo0",
    _type: "shopping.item",
    category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
    name: { en: "Artichokes", de: "Artischocken" },
  },
  {
    _id: "c2hvcHBpbmcuaXRlbTo1",
    _type: "shopping.item",
    category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
    name: { en: "Aubergine", de: "Aubergine" },
  },
  {
    _id: "c2hvcHBpbmcuaXRlbTo2",
    _type: "shopping.item",
    category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
    name: { en: "Oyster mushrooms", de: "Austernpilze" },
  },
  {
    _id: "c2hvcHBpbmcuaXRlbTo3",
    _type: "shopping.item",
    category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
    name: { en: "Avocado", de: "Avocado" },
  },
  {
    _id: "c2hvcHBpbmcuaXRlbTo4",
    _type: "shopping.item",
    category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
    name: { en: "Baby spinach", de: "Babyspinat" },
  },
  {
    _id: "c2hvcHBpbmcuaXRlbTo5",
    _type: "shopping.item",
    category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
    name: { en: "Bananas", de: "Bananen" },
  },
];

export default function App() {

  const [allItems, setallItems] = useState(items);
  const apiUrl =
    'https://fetch-me.vercel.app/api/shopping/items'
  ;
  //const [nextApiUrl, setNextApiUrl] = useState('');

  useEffect(() => {

    function loadallItems() {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((daten) => {
          setallItems(daten.data);
        });
    }

    loadallItems();
  }, []);


  return (
  <>
  <Header />
  <Search />
      
    <ListContainer>
      <ul>
        {allItems.map(({ name, _id }) => (
          <li key={_id}>
            <p>{name.de}</p>
          </li>
        ))}
      </ul>
    </ListContainer> 

  <Footer />
  </>
);
} 

const ListContainer = styled.div`

  display: flex;
  max-width: 500px;
  justify-content: center;

ul {
  list-style: none;
  flex-wrap: wrap;
  display: flex;
  gap: 10px;
  border: 1px solid;
  border-radius: 5px;
}

  li {
    display: flex;
    border: 2px solid;
    padding: 10px;
    border-radius: 5px;
  }

  p {
    margin: auto;
  }
`
  
  