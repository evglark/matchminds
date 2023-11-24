import { Cover, TextBlock } from '@/components/pages/CompanyPage/MainContent';

export const getComponentsByType = (type: string, data: any, editMode: boolean) => {
  if (type === 'right_text_image') {
    return (
      <TextBlock
        title={data.json.title}
        text={data.json.text}
        imgSrc={data.json.image}
        imgPosition="right"
        editMode={editMode}
        data={data}
      />
    );
  }

  if (type === 'left_text_image') {
    return (
      <TextBlock
        title={data.json.title}
        text={data.json.text}
        imgSrc={data.json.image}
        imgPosition="left"
        editMode={editMode}
        data={data}
      />
    );
  }

  if (type === 'text_with_heading') {
    return (
      <TextBlock
        title={data.json.title}
        text={data.json.text}
        imgPosition="top"
        editMode={editMode}
        data={data}
      />
    );
  }

  if (type === 'image') {
    return <Cover imgSrc={data.json.image} editMode={editMode} data={data} />;
  }
};
