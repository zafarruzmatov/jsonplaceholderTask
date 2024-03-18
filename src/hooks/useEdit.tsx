import { useMemo, useState } from "react";

const UseEdit = <T,>() => {
    const [editData, setEditData] = useState<T | null>(null);

    const data = useMemo(() => {
        return editData;
    }, [editData]);

    return { editData: data, setEditData };
};

export default UseEdit;
