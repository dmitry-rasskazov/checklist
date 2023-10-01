import Save from "./Save";
import Edit from "./Edit";
import Delete from "./Delete";
import Cancel from "./Cancel";
import { useState } from "react";

const COMPLETE_MESSAGE = <span className={'text-secondary'}>Выполнено</span>;

function ListItem({ itemInfo, deleteItem, changeItem })
{
    const [item, setItem] = useState(itemInfo);
    const [text, setText] = useState(item.text);

    function flushChanges(editedItem)
    {
        setItem(editedItem);
        changeItem(editedItem);
    }

    function onCheck()
    {
        let copyItem = {};
        Object.assign(copyItem, item);

        copyItem.checked = true;

        flushChanges(copyItem);
    }

    function onUncheck()
    {
        let copyItem = {};
        Object.assign(copyItem, item);

        copyItem.checked = false;

        flushChanges(copyItem);
    }

    function onSave()
    {
        let copyItem = {};
        Object.assign(copyItem, item);

        copyItem.text = text;
        copyItem.isEdit = false;

        flushChanges(copyItem);
    }

    function onBack()
    {
        let copyItem = {};
        Object.assign(copyItem, item);
        setText(item.text);

        copyItem.isEdit = false;

        flushChanges(copyItem);
    }

    function onEdit()
    {
        let copyItem = {};
        Object.assign(copyItem, item);

        copyItem.isEdit = true;

        flushChanges(copyItem);
    }

    function onDelete()
    {
        deleteItem(item.id);
    }

    const UNCHECKED_BUTTON_SET = [
        <Save callback={onCheck} />,
        <Edit callback={onEdit} />,
        <Delete callback={onDelete} />,
    ];
    const CHECKED_BUTTON_SET = [<Cancel callback={onUncheck} />, <Delete callback={onDelete} />];
    const EDITING_BUTTON_SET = [<Save callback={onSave} />, <Cancel callback={onBack} />];

    return <div className={'card'}>
            <div className={'card-header container'}>
                <div className={'row'}>
                    <div className={'col-6'}>{item.checked ? COMPLETE_MESSAGE : ''}</div>
                    <div className={'col-6 d-flex justify-content-end'}>
                        {item.checked ? CHECKED_BUTTON_SET : (item.isEdit ? EDITING_BUTTON_SET : UNCHECKED_BUTTON_SET)}
                    </div>
                </div>
            </div>
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">{item.datetime}</h6>
                {
                    item.isEdit
                    ? <textarea value={text} onChange={(event) => setText(event.target.value)}></textarea>
                    : <p className="card-text">{item.text}</p>
                }
            </div>
        </div>
    ;
}

export default ListItem;