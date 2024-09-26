package com.transaction.spring.controller;

import com.transaction.spring.entity.Cliente;
import com.transaction.spring.repositoty.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class ClienteController {

    @Autowired
    private ClienteRepository clienteRepository;

    @GetMapping("/all")
    List<Cliente> getAll(){

        return clienteRepository.findAll();
    }

    @PostMapping("/add")
    Cliente add(@RequestBody  Cliente cliente){

        return clienteRepository.save(cliente);
    }

    @PutMapping("{id}")
    Cliente update(@PathVariable("id") int id, @RequestBody Cliente cliente){
        Cliente cliente1 = clienteRepository.findById(id).get();
        cliente1.setEnderecoEmail(cliente.getEnderecoEmail());
        cliente1.setId(cliente.getId());
        cliente1.setNome(cliente.getNome());
        cliente1.setIdade(cliente.getIdade());
        cliente1.setNumeroConta(cliente.getNumeroConta());

        return clienteRepository.save(cliente1);
    }
    @GetMapping("{id}")
    Cliente getEmp(@PathVariable("id") int id){

        return clienteRepository.findById(id).get();
    }
    @DeleteMapping("{id}")
    String delete(@PathVariable("id") int id){

        clienteRepository.deleteById(id);
         return "Deletado com sucesso";
    }
}

