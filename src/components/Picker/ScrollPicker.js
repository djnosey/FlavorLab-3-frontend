import React, { Component } from "react";
import Picker from "react-mobile-picker-scroll";

class ScrollPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueGroups: {
        title: [
          "Alliums",
          "Asparagus",
          "Artichoke",
          "Avocado",
          "Beef",
          "Beetroot",
          "Berry",
        ],
      },
      optionGroups: {
        title: [
          "Alliums",
          "Asparagus",
          "Artichoke",
          "Avocado",
          "Beef",
          "Beetroot",
          "Berry",
          "Brassica Floral",
          "Brassica Leafy",
          "Brassica Rapa",
          "Capisicum",
          "Caramel",
          "Carrot",
          "Citrus",
          "Cocoa",
          "Corn",
          "Cress",
          "Crustacean",
          "Cucumber",
          "Dairy",
          "Egg",
          "Eggplant",
          "Fennel",
          "Fig",
          "Fish",
          "Game Meat",
          "Ginger",
          "Grain",
          "Grape",
          "Green Bean",
          "Honey",
          "Jerusalem Artichoke",
          "Kiwi",
          "Lamb",
          "Lemongrass",
          "Lettuce",
          "Melon",
          "Mollusk",
          "Mushroom",
          "Nut",
          "Olive",
          "Pea",
          "Pome Fruit",
          "Pomegranite",
          "Pork",
          "Potato",
          "Poultry",
          "Radish",
          "Rice",
          "Root Vegetable",
          "Squash, Summer",
          "Squash, Winter",
          "Stone Fruit",
          "Tomato",
          "Tropical Fruit",
          "Truffle",
        ],
      },
    };
  }

  handleChange = (name, value) => {
    this.setState(({ valueGroups }) => ({
      valueGroups: {
        ...valueGroups,
        [name]: value,
      },
    }));
    this.props.findIngredient(this.state.valueGroups.title);
  };

  render() {
    const { optionGroups, valueGroups } = this.state;

    return (
      <Picker
        optionGroups={optionGroups}
        valueGroups={valueGroups}
        onChange={this.handleChange}
        itemHeight={55}
        height={500}
      />
    );
  }
}

export default ScrollPicker;
