import ListItem from './ListItem'
import PlusItemButton from './PlusItemButton'
import { v4 as uuid } from 'uuid';
import {useState} from "react";

function List({ itemsInfoList, onChange })
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

        let copyItems = [...items, newItem];

        setItems(copyItems);

        onChange(copyItems);
    }

    function deleteItem(id)
    {
        let copyItems = [...(items.filter((value) => value.id !== id))];

        setItems(copyItems);

        onChange(copyItems);
    }

    function changeItem(changedItem)
    {
        let copyItems = [...items];

        copyItems.forEach((item, index) => {
            if(item.id === changedItem.id) {
                copyItems[index] = {...changedItem};
            }
        });

        setItems(copyItems);

        onChange(copyItems);
    }

    const itemSize = 'col-lg-4 col-md-6 col-sm-12';

    return <div className={'container'}>
        <div className={'row'}>
            {items.map((item) =>
                <div key={item.id} className={itemSize}>
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