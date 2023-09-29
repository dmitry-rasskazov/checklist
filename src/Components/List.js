import ListItem from './ListItem'
import PlusItemButton from './PlusItemButton'
import { v4 as uuid } from 'uuid';
import {useState} from "react";

function List({ itemsInfoList, onStore })
{
    const [items, setItems] = useState(itemsInfoList);
    function createNewItem()
    {
        const newItem = {
            id: uuid(),
            checked: false,
            datetime: new Date().toDateString(),
            isEdit: true
        };

        setItems([...items, newItem]);

        onStore(items).then(result => console.log("Storing complete when create!"));
    }

    function deleteItem(id)
    {
        setItems([...items.filter((value) => value.id !== id)]);

        onStore(items).then(result => console.log("Storing complete when delete!"));
    }

    function changeItem()
    {
        onStore(items).then(result => console.log("Storing complete when change!"));
    }

    const itemSize = 'col-lg-4 col-md-6 col-sm-12';

    return <div className={'container'}>
        <div className={'row'}>
            {items.map((item) =>
                <div className={itemSize}>
                    <ListItem
                        key={item.id}
                        itemInfo={item}
                        deleteItem={deleteItem}
                        changeItem={changeItem}
                    />
                </div>)}
            <div className={itemSize}>{<PlusItemButton addItem={createNewItem} />}</div>
        </div>
    </div>;
}

export default List;