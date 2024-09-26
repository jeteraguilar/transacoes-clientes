package com.transaction.spring.controller;

import com.transaction.spring.entity.TipoTransacao;
import com.transaction.spring.entity.Transacao;
import com.transaction.spring.repositoty.TransacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/transacao")
@CrossOrigin(origins = "http://localhost:4200")
public class TransacaoController {

    @Autowired
    private TransacaoRepository transacaoRepository;

    @GetMapping("/all")
    List<Transacao> getAll() {

        return transacaoRepository.findAll();
    }

    @PostMapping("/add")
    Transacao add(@RequestBody Transacao transacao) {
        ajustarValorPorTipo(transacao);
        return transacaoRepository.save(transacao);
    }

    @PutMapping("/{id}")
    Transacao update(@PathVariable("id") int id, @RequestBody Transacao transacao) {
        Transacao transacao1 = transacaoRepository.findById(id).get();
        transacao1.setId(transacao.getId());
        transacao1.setNome(transacao.getNome());
        transacao1.setTipoTransacao(transacao.getTipoTransacao());
        transacao1.setValor(transacao.getValor());
        transacao1.setNumeroConta(transacao.getNumeroConta());

        ajustarValorPorTipo(transacao1);

        return transacaoRepository.save(transacao1);
    }

    private void ajustarValorPorTipo(Transacao transacao) {
        if (transacao.getTipoTransacao() == TipoTransacao.DEBITO) {
            transacao.setValor(transacao.getValor() * -1);
        } else if (transacao.getTipoTransacao() == TipoTransacao.CREDITO) {
            transacao.setValor(Math.abs(transacao.getValor()));
        }
    }

    @GetMapping("/{id}")
    Transacao getEmp(@PathVariable("id") int id) {

        return transacaoRepository.findById(id).get();
    }

    @DeleteMapping("/{id}")
    String delete(@PathVariable("id") int id) {

        transacaoRepository.deleteById(id);
        return "Deletado com sucesso";
    }
}
