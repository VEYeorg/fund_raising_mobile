import React, {ReactNode, createContext, useContext} from 'react';
import { ht , en, fr, es, LangType} from '../assets/lang';

interface LangContextProps {
  lang: LangType;
  handleLang: (value:string) => void;  
  isLoading?: boolean;
  _setLoading?: (value:boolean) => void;
}

const LangContext = createContext<LangContextProps | undefined>(undefined);

export const useLang = (): LangContextProps => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLang must be used within an LangContextProvider');
  }
  return context;
};

interface LangContextProviderProps {
  children: ReactNode;
}

export const LangContextProvider: React.FC<LangContextProviderProps> = ({
  children,
}) => {
  
  const [lang, setLang] = React.useState(fr);

  const [isLoading, setIsLoading] = React.useState(false);

  const _setLoading = (value:boolean) => {
    setIsLoading(value)
  }

  const handleLang = (value: string) => {
    if (value === 'en') {
      setLang(en);
      
    }else if (value === 'ht') {
      setLang(ht);
    }
    else if (value === 'fr') {
      setLang(fr);
    }
    else if (value === 'es') {
      setLang(es);
    }else{
      setLang(ht);
    }
  };

  const value = {
    lang,
    handleLang,
    isLoading,
    _setLoading
  } as LangContextProps;

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};
