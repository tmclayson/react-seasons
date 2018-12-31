import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

// export = {
//     IconTopLeft: styled(Icon)`
//         position: absolute;
//         top: 10px;
//         left: 10px;
//     `,
//     IconBottomRight: styled(Icon)`
//         position: absolute;
//         bottom: 10px;
//         right: 10px;
//     `,
// };

const IconTopLeft = styled(Icon)`
    position: absolute;
    top: 10px;
    left: 10px;
`;

const IconBottomRight = styled(Icon)`
    position: absolute;
    bottom: 10px;
    right: 10px;
`;

export { IconTopLeft, IconBottomRight };
