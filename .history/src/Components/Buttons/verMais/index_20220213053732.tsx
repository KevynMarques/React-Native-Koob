import React from "react";

export default () => {

return (
  <VerMais
  onPress={Ver}
  >
  <TextoVer>{abrir ? 'ver menos...' : 'ver mais...'}</TextoVer>
  </VerMais>
);

}