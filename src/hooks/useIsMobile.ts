import { useBreakpointValue } from '@chakra-ui/react';

function useIsMobile(): boolean {
    let v = useBreakpointValue({ base: true, sm: false });
    if (v === undefined) {
        v = false;
    }
    return v;
}

export default useIsMobile;
