export const buildTree = (items: any, parentId = '0') => {
  return items
    ?.filter((item: any) => item.parent_id === parentId)
    ?.map((item: any) => {
      const children = buildTree(items, item.id);
      return {
        ...item,
        children: children.length > 0 ? children : [],
      };
    });
};

export const convertStandardOption = (items: any[], label: string, value: string) => {
  return items?.map((item) => ({
    label: item[label],
    value: item[value]
  }))
}

// validation
export const requiredTextValidation = (name: string) => `Mohon isi ${name}`;
export const maxNumInput = 75;
export const maxNumTextArea = 255;
export const maxTextValidation = (type: 'text' | 'textarea', currentNum: number, num?: number) =>
  `Must be ${type === 'text' ? maxNumInput : type === 'textarea' ? maxNumTextArea : num
  } characters or less. Now ${currentNum} characters`;
export const minTextValidation = (label: string, num: number) =>
  `Minimal karakter berjumlah ${num} ${label}.`;

export function getFileNameAndExtension(fullFileName: string) {
  const lastDotIndex = fullFileName.lastIndexOf(".");
  if (lastDotIndex === -1) {
    // No dot found, return fullFileName as the name and an empty string as the extension
    return { name: fullFileName, extension: "" };
  }

  const name = fullFileName.substring(0, lastDotIndex);
  const extension = fullFileName.substring(lastDotIndex + 1);

  return { name: name, extension: extension };
}