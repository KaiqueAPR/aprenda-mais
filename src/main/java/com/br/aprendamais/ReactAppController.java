package com.br.aprendamais;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ReactAppController {
    @RequestMapping(value = { "/", "/cadastro","/abc","/error"  })
    public String getIndex(HttpServletRequest request) {
        return "/index.html";
    }
}
