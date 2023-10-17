import React, { useState } from 'react';
import { View } from 'react-native';
import categories from '../assets/data/categories.json';
import styles from '../assets/css/Categories.style';
import Icons from '../assets/Icons';
import DropDownPicker from 'react-native-dropdown-picker';

const Categories = () => {

  const [open, setOpen] = useState(false);
 
  const [value, setValue] = useState(null);
  const selectedCategory = categories.find(category => category.id === value);
  const selectedIconName = selectedCategory ? selectedCategory.iconName : null;

  const [items, setItems] = useState(categories.map(category => ({
    label: category.categoryNameTr,
    value: category.id,
  })));

  return (
    <View style={styles.container}>
      <View style={styles.picker}>
        <View style={styles.icon}>
        <Icons icon={selectedCategory? selectedIconName : 'list'} width={35} color={"black"}/>
        </View>
        <DropDownPicker
        
          items={items}
          setItems={setItems}
          itemKey='value'
          value={value}
          setValue={setValue}
          open={open}
          setOpen={setOpen}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          containerStyle={styles.containerStyle}
          zIndex={999}
          placeholder='Harcama Türünü seçiniz'
        />
      </View>
 
    </View>

  );
};

export default Categories;
