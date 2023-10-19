import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import categories from '../assets/data/categories.json';
import styles from '../assets/css/Categories.style';
import Icons from '../assets/Icons';
import DropDownPicker from 'react-native-dropdown-picker';
import { setIcon, setTitle } from '../src/context/Slice';
import { useDispatch } from 'react-redux'
const Categories = () => {

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const [value, setValue] = useState(1);
  const selectedCategory = categories.find(category => category.id === value);
  const selectedIconName = selectedCategory ? selectedCategory.iconName : null;

  const [items, setItems] = useState(categories.map(category => ({
    label: category.categoryNameTr,
    value: category.id,
  })));

  const handleGlobal = () => {
    const selectedCategory = categories.find(category => category.id === value);
    dispatch(setIcon(selectedCategory.iconName));
    dispatch(setTitle(selectedCategory.categoryNameTr))
  }

  useEffect(() => {
    handleGlobal();
  }, [value]);

  return (
    <View style={styles.container}>
      <View style={styles.picker}>
        <View style={styles.icon}>
          <Icons icon={selectedCategory ? selectedIconName : 'list'} width={35} color={"black"} />
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
          placeholder='Harcama Türünü seçiniz' />
      </View>

    </View>

  );
};

export default Categories;
