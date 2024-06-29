interface IBrandMetaData  {
    sitename: string;
    logo: string;
    colors: IBrandColors;
};

interface IBrandColors {
    primary: string;
    secondary: string;
};
export default IBrandMetaData;